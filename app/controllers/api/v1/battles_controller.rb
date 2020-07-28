class Api::V1::BattlesController < ApplicationController

    def index
        battles = Battle.all
        render json: battles
    end

    def create
        battle = Battle.new(battle_params)
        if battle.save
            render json: battle, status: :accepted
        else
            render json: {errors: battle.errors.full_messages}
        end
    end

    private

    def battle_params
        params.require(:battle).permit(:title, :description, :image_url, :country_id)
    end

end
