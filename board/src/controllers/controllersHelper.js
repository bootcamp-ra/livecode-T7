function serverError(res, error) {
  console.log(error);
  return res.sendStatus(500);
}

function okResponse(res, body) {
  return res.send(body);
}

function badRequestResponse(res, body) {
  return res.status(404).send(body);
}

function createdResponse(res, body) {
  return res.status(201).send(body);
}

export { serverError, okResponse, badRequestResponse, createdResponse };
