module Api
  module V1
    class UsersController < ApplicationController
      def update
        @user = User.find(params[:id])
        if @user.update_attributes(params.require(:user).permit(:checked_in))
          head :no_content
          # redirect_to user_checkin_path(@user), notice: "You're all checked in!"
        else
          render json: { error: "Unable to perform checkin / out" }, status: :unprocessable_entity #status code: 422
        end
      end

    end
  end
end
