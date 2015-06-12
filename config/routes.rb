Rails.application.routes.draw do
  root to: "static_pages#index"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:show]
    get '/users/:id/stream' => 'users#stream'
    get '/users/:id/liked' => 'users#liked'
    resources :tracks, only: [:index]
  end

  resource :session, only: [:create, :destroy, :new]
  resources :users, only: [:create, :new]
end
