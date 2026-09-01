const Product = require("../models/Product");
const mongoose = require("mongoose");
const getAllProductService = async () => {
    try {
        const products = await Product.find().lean();
        return products;
    } catch (error) {
        throw new Error("Không thể lấy danh sách sản phẩm");
    }
};
const getProductByIdService = async (req) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        const error = new Error("ID sản phẩm không hợp lệ");
        error.statusCode = 400;
        throw error;
    }

    try {
        const product = await Product.findById(id).lean();

        if (!product) {
            const error = new Error("Không tìm thấy sản phẩm");
            error.statusCode = 404;
            throw error;
        }

        return product;
    } catch (error) {
        if (error.statusCode) {
            throw error;
        }
        const serviceError = new Error("Không thể lấy sản phẩm");
        serviceError.statusCode = 500;
        throw serviceError;
    }
};

module.exports = {
    getAllProductService,
    getProductByIdService
};
