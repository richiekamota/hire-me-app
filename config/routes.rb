Rails.application.routes.draw do
  get 'companies/index'
  get 'home/index'
  get 'candidates/index'
  root 'welcome#index'
end
