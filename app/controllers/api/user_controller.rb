class Api::UserController < ApplicationController
	before_action :check_user_authentication!, only: [:index]

	def index
		render json: current_user
	end

	def confirm_email
		User.confirm_by_token(params[:confirmation_token])
	end
end