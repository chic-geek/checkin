class CheckinsController < ApplicationController
  def show
    @user = User.find(params[:user_id])
  end

  def update
    @user = User.find(params[:user_id])
    render 'show'
  end
end
