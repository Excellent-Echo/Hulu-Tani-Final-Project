package helper

import "github.com/go-playground/validator/v10"

type Response struct {
	Code    int         `json:"code"`
	Message string      `json:"message"`
	Data    interface{} `json:"data"`
}

type Failure struct {
	Code  int    `json:"code"`
	Error string `json:"error"`
}

func APIResponse(code int, message string, data interface{}) Response {
	var response = Response{
		Code:    code,
		Message: message,
		Data:    data,
	}
	return response
}

func APIFailure(code int, error string) Failure {
	var failure = Failure{
		Code:  code,
		Error: error,
	}
	return failure
}

func SplitErrorInformation(err error) []string {
	var errors []string

	for _, e := range err.(validator.ValidationErrors) {
		errors = append(errors, e.Error())
	}

	return errors
}
