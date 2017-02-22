Rails.application.routes.draw do
  root 'lists#index'
  resources :lists do
    resources :items, :only => [:create, :edit, :destroy, :show]
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
