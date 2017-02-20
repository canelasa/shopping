class ItemsController < ApplicationController
  def create
    @list = List.find(params[:list_id])
    @list.items.create(item_params)
    redirect_to lists_path
  end

  def destroy
   @list = List.find(params[:list_id])
   @item = @list.items.find(params[:id])
   @item.destroy
   redirect_to list_path, :notice => "Item Deleted"
 end

  private
  def item_params
    params.require(:item).permit(:name, :sku, :price, :quantity)
  end
end
