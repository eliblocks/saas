Rails.application.routes.draw do
  devise_for :users, defaults: { format: :json }

  namespace :api, defaults: { format: :json } do
  	get "/dashboard", to: 'dashboard#index'
  	get "/user", to: 'user#index'
  	post "/user/confirm_email", to: 'user#confirm_email'
  end

  get '*path', to: "react#fallback_index_html", constraints: ->(request) do
  	!request.xhr? && request.format.html?
	end
end
