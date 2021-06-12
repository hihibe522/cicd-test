module.exports = {
    pubilcPath: process.env.NODE_ENV === 'production'
        ? '/cicd-test/'
        : '/'
};