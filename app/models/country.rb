class Country < ApplicationRecord
    has_many :battles
    validates :name, uniqueness: true
end
