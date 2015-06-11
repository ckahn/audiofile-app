Rails.application.routes.draw do
  resource :session, only: [:create, :destroy, :new]
  resources :tracks, only: [:index]
  resources :users, only: [:create, :new, :show]
  root to: "static_pages#index"
end
