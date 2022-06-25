class CandidatesController < ApplicationController
  def index
    @companies = Company.all
  end
end
