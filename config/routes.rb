Rails.application.routes.draw do
  get "/test", to: 'test#index'

  get '*path', to: "application#fallback_index_html", constraints: ->(request) do
  	!request.xhr? && request.format.html?
	end
end
