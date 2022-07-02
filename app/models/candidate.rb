class Candidate < ApplicationRecord
    validates :name, :email, :description, :strengths, 
    presence: true
end
