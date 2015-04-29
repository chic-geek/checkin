Rails.application.routes.draw do

  devise_for :users

  resources :users, only: [] do
    resource :checkin, only: [:show, :update]
  end

  root to: 'dashboard#index'
end
