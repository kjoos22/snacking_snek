Rails.application.routes.draw do
  resources :games, only: [:create, :index]
  resources :players, only: [:create, :index, :show]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
