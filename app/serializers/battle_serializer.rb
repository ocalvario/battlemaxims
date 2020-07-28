class BattleSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :description, :image_url, :country_id, :country
end
