module.exports = function(context) {
    context.log('Node.js Blob trigger function processed', context.bindings.myBlob);
    context.bindings.myOutputBlob = context.bindings.myBlob;
    context.done();
};
