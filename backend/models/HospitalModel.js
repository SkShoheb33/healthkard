const mongoose = require('mongoose');

const HospitalSchema = new mongoose.Schema({
    hospitalId: String,
    hospitalDetails: {
        daysAvailabilty: {
            M: Boolean,
            T: Boolean,
            W: Boolean,
            Th: Boolean,
            F: Boolean,
            Sa: Boolean,
            Su: Boolean
        },
        from: String,
        gstNumber: String,
        hospitalGSTFile: String,
        hospitalLegalName: String,
        hospitalLicense: String,
        hospitalNumber: String,
        hospitalOwnerContactNumber: String,
        hospitalOwnerEmail: String,
        hospitalOwnerFullName: String,
        hospitalTradeName: String,
        licenseNumber: String,
        address: {
            city: String,
            code : String,
            country: String,
            landmark: String,
            state : String,
            street: String
        },
        servicesOffered: String,
        to: String
    },
    doctorList: [
        {
            doctorLicenseURL: String,
            email: String,
            lisenceNumber: String,
            name: String,
            number: String,
            qualification: String
        }
    ],
    mediaDetails: {
        achievements: Array,
        desc: String,
        doctorImageURL: String,
        hospitalImageURL: String,
        logoURL: String,
        videoURL: String
    }
});

const HospitalModel = mongoose.model('Hospital', HospitalSchema);

module.exports = HospitalModel;
