class ApplicationController < ActionController::API
	include ActionController::MimeResponds
	before_action :configure_permitted_parameters, if: :devise_controller?
	respond_to :json

	def check_user_authentication!
		return if current_user

		render json: { error: "not signed in" }, status: :unauthorized
	end
	
	def configure_permitted_parameters
		devise_parameter_sanitizer.permit(:sign_up, keys: [:full_name])
	end
end
