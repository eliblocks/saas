class TestController < ApplicationController
	def index
		render json: { message: "hello from rails" }
	end
end