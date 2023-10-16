const Property = require('./property-modal');
const User = require('../user/user-model');

exports.getUserEmail = () => {
    return Property.aggregate([
        {
            $lookup: {
                from: 'users',
                localField: 'ownerId',
                foreignField: '_id',
                as: 'owner',
            },
        },
        {
            $unwind: '$owner',
        },
        {
            $project: {
                _id: 0,
                propertyName: 1,
                propertyType: 1,
                propertyDescription: 1,
                propertyAddress: 1,
                propertyNumber: 1,
                ownerEmail: '$owner.userEmail',
            },
        },
    ])
    }


exports.createProperty = async (propertyData) => {
    try {
        const user = await User.findById(propertyData.ownerId);
        if (!user) {
            return null;
        }
        const newProperty = await Property.create(propertyData);

        return newProperty;
    } catch (error) {
        throw error;
    }
}

exports.getAllProperty = async (propertyData) => {
    try {
        const { userId } = propertyData.params;
        const user = await User.findById(userId);
        if (!user) {
            return null;
        }
        const propertiesOfUser = await Property.find({ ownerId: userId });

        return propertiesOfUser;
    } catch (error) {
        throw error;
    }
}

exports.getPropertyByPropertyNumber = async (propertyData) => {
    try {
        const { propertyNumber } = propertyData.params;
        const property = await Property.findOne({ propertyNumber: propertyNumber });
        if (!property) {
            return null;
        }
        return property;
    } catch (error) {
        throw error;
    }
}

exports.updatePropertyByPropertyNumber = async (propertyData) => {
    try {
        const { propertyNumber } = propertyData.params;
        const updatedProperty = await Property.findOneAndUpdate(
            { propertyNumber: propertyNumber },
            propertyData.body,
            { new: true }
        );
        if (!updatedProperty) {
            return null;
        }
        return updatedProperty;
    } catch (error) {
        throw error;
    }
}

exports.deletePropertyByPropertyNumber = async (propertyData) => {
    try {
        const { propertyNumber } = propertyData.params;
        const deletedProperty = await Property.findOneAndDelete(propertyNumber);
        return deletedProperty;
    } catch (error) {
        throw error;
    }
}
