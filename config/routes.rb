Rails.application.routes.draw do
  root to: "static_pages#index"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:index, :show, :update]
    resources :tracks, only: [:create, :index]
    resources :likes, only: [:create, :destroy]
    resources :follows, only: [:create, :destroy]
    get '/users/:id/stream' => 'users#stream'
    get '/users/:id/liked_tracks' => 'users#liked_tracks'
    get '/users/:id/followed_users' => 'users#followed_users'
    get '/users/:id/uploaded' => 'users#uploaded'
  end

  resource :session, only: [:create, :destroy, :new]
  resources :users, only: [:create, :new]
end
