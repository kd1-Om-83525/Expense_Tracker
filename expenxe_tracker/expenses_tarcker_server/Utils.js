function createErrorResult(error){
    return {status:'error',error}
}
function createSuccessResult(data){
    return {status:'success',data}
}

function result(error,data){
    return error? createErrorResult(error):createSuccessResult(data);
}

module.exports={
    createErrorResult,
    createSuccessResult,
    result
}