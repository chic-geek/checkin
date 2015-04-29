Rails.application.routes.draw do

  root to: 'dashboard#index'

  devise_for :users

  resources :users, only: [] do
    resource :checkin, only: [:show, :update]
  end

  namespace :api do
    namespace :v1 do
      resources :users, only: [:update]
    end
  end

end
