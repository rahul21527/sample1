module.exports = function(context) {
    context.log('Node.js Queue trigger function processed', context.bindings.myBlob);
    context.bindings.myOutputBlob = context.bindings.myInputBlob;
    context.done();
};
