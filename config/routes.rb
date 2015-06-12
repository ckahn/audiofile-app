Rails.application.routes.draw do
  root to: "static_pages#index"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:show]
    resources :tracks, only: [:index]
    get '/users/:id/stream' => 'users#stream'
    get '/users/:id/liked' => 'users#liked'
  end

  resource :session, only: [:create, :destroy, :new]
  resources :users, only: [:create, :new]
end
