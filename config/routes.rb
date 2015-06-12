Rails.application.routes.draw do
  root to: "static_pages#index"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:show]
  end

  resource :session, only: [:create, :destroy, :new]
  resources :tracks, only: [:index]
  resources :users, only: [:create, :new]
end
