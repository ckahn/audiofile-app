Rails.application.routes.draw do
  resource :session, only: [:create, :destroy, :new]
  resources :users, only: [:create, :new]
  root to: "static_pages#index"
end
