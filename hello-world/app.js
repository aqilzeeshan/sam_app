//https://acloudguru.com/blog/engineering/packaging-aws-lambda-functions-as-container-images

const faker = require('faker')
module.exports.lambdaHandler = async (event, context) => {
    return faker.helpers.createCard()
}