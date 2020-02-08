var mongoose = require('mongoose');

var modelSchema = mongoose.Schema({
    name: {
        type: String,
        minlength: [6, "El nombre es muy corto"],
        maxlength: [12, "El nombre es muy largo"]
    },
    email: {
        type: String,
        required: [true, "El correo electrónico es obligatorio"]
    },
    type: {
        type: String,
        enum: ["Alumno Zombie", "Maestro Zombie"]
    }
});

var Zombie = mongoose.model("Zombie", modelSchema);
module.exports = Zombie;