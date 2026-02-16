function status(request, response){
    response.status(200).json({mensagem: "Os alunos estão bem, obrigado por perguntar!"});
}

export default status;