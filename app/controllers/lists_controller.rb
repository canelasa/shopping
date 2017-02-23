class ListsController < ApplicationController
  def index
    @lists = List.includes(:items)
    @lists_json = List.includes(:items).map { |list| list.as_json.merge({items: list.items.as_json}) }
    respond_to do |format|
      format.html
      format.json {render json: @lists_json}

    end
  end

  def new
    @list = List.new
  end

  def create
    @list = List.create(list_params)
    redirect_to :root
  end

  def show
    @list = List.find(params[:id])
    @item = Item.new
  end

  def edit
    @list = List.find(params[:id])
  end

  def update
    @list = List.find(params[:id])
    @list.update_attributes(list_params)
    redirect_to root_path
  end

  def destroy
    @list = List.find(params[:id])
    @list.destroy
    redirect_to root_path
  end

  private
  def list_params
    params.require(:list).permit(:name, :description)
  end
end
