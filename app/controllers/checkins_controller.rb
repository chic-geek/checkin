class CheckinsController < ApplicationController
  def show
    @user = User.find(params[:user_id])
  end

  def update
    @user = User.find(params[:user_id])
    if @user.update_attributes(params.permit(:checked_in))
      redirect_to user_checkin_path(@user), notice: "You're all checked in!"
    else
      render 'show'
    end
  end
end
