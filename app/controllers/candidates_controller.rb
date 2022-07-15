class CandidatesController < ApplicationController
  def index
    @companies = Company.all
    @candidates = Candidate.all.to_json
  end
end
