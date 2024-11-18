import { useContext } from "react";
import { StoreContext } from "../Context/StoreContext";
import { useNavigate } from "react-router-dom";
import styles from "../styles";
import { assets } from "../assets/assets";

const Cart = () => {
  const navigate = useNavigate();
  const {
    cartItems,
    food_list,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    deleteCartItem,
  } = useContext(StoreContext);
  const itemsGridLayout =
    "grid grid-cols-[0.5fr_1.5fr_1fr_1fr_1fr_0.5fr] phone:grid-cols-[2fr_1fr] items-center";
  return (
    <div id="cart" className="mt-[30px] phone:mt-[0px] phone:mx-[20px]">
      <h2 className="text-[26px] font-medium my-[20px]">Your Orders</h2>
      <div id="cart-items">
        {console.log(window.innerWidth)}
        <div
          id="cart-items-title"
          className={`${itemsGridLayout} text-[#737373]`}
        >
          <p>Items</p>
          <p className="phone:hidden">Title</p>
          <p className="phone:hidden">Price</p>
          <p className="phone:hidden">Quantity</p>
          <p>Total</p>
          <p className="hidden">Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div>
                <div
                  id="cart-items-item"
                  className={`${itemsGridLayout} my-[10px] text-black`}
                >
                  <div className="hidden phone:flex">
                    <div className="w-[60px] h-[60px] mr-[20px]">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-[60px] object-cover rounded-[8px]"
                      />
                    </div>
                    <div>
                      <p className="text-[18px] phone-s:text-[16px]">
                        {item.name}
                      </p>
                      <p className="text-[12px] text-[#737373]">
                        ₦ {item.price.toLocaleString()}
                      </p>
                    </div>
                  </div>
                  <div className="hidden phone:block">
                    <p className="font-medium text-[16px] phone-s:text-[14px]">
                      ₦ {(item.price * cartItems[item._id]).toLocaleString()}
                    </p>
                    <div className="flex w-[80%] phone-s:w-[100%] rounded-full bg-[#eaeaea] justify-between items-center mt-[5px]">
                      <img
                        onClick={() => removeFromCart(item._id)}
                        src={assets.remove_icon_black}
                        alt=""
                        className="w-[10px] phone-s:w-[8px] my-[10px] mx-[15px] cursor-pointer"
                      />
                      <p className="phone-s:text-[12px]">
                        {cartItems[item._id]}
                      </p>
                      <img
                        onClick={() => addToCart(item._id)}
                        src={assets.add_icon_black}
                        alt=""
                        className="w-[10px] phone-s:w-[8px] my-[10px] mx-[15px]"
                      />
                    </div>
                  </div>

                  <div className="w-[50px] h-[50px] phone:hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-[50px] object-cover rounded-full"
                    />
                  </div>
                  <p className="phone:hidden">{item.name}</p>
                  <p className="phone:hidden">
                    ₦ {item.price.toLocaleString()}
                  </p>

                  <div className="flex phone:hidden rounded-full bg-[#ffffff] justify-between items-center w-[60%] for-tab-s:w-[80%]">
                    <div
                      onClick={() =>
                        cartItems[item._id] === 1
                          ? {}
                          : removeFromCart(item._id)
                      }
                      className="bg-transparent border-[2px] border-solid border-[#eaeaea] rounded-xl cursor-pointer"
                    >
                      <img
                        src={assets.remove_icon_black}
                        alt=""
                        className={`${cartItems[item._id] === 1 ? "opacity-[20%]" : ""} w-[10px] m-[10px]`}
                      />
                    </div>

                    <p className="text-[14px]">{cartItems[item._id]}</p>

                    <div
                      onClick={() => addToCart(item._id)}
                      className="bg-[#eaeaea] rounded-xl cursor-pointer"
                    >
                      <img
                        src={assets.add_icon_black}
                        alt=""
                        className="w-[10px] m-[10px]"
                      />
                    </div>
                  </div>

                  <p className="font-medium phone:hidden">
                    ₦ {(item.price * cartItems[item._id]).toLocaleString()}
                  </p>
                  <div className="flex w-[100%] justify-center">
                    <img
                      onClick={() => deleteCartItem(item._id)}
                      src={assets.delete_cart_item_icon}
                      alt=""
                      className="phone:hidden cursor-pointer w-[20px]"
                    />
                  </div>
                </div>
                <hr className="h-[1px] bg-[#e2e2e2] border-none" />
              </div>
            );
          }
        })}
      </div>
      <div
        id="cart-bottom"
        className="mt-[80px] flex for-tab-s:flex-col-reverse justify-between gap-[max(12vw,20px)]"
      >
        <div id="cart-total" className="flex flex-1 flex-col gap-[20px]">
          <h2 className="text-[24px] font-medium">Cart Total</h2>
          <div>
            <div
              id="card-total-details-subtotal"
              className={styles.cartTotalDetailsStyle}
            >
              <p>Subtotal</p>
              <p>₦ {getTotalCartAmount().toLocaleString()}</p>
            </div>
            <hr className="my-[10px] h-[1px] border-none bg-[#e2e2e2]" />
            <div
              id="card-total-details-delivery-fee"
              className={styles.cartTotalDetailsStyle}
            >
              <p>Service fee</p>
              <p>
                ₦{" "}
                {getTotalCartAmount() === 0
                  ? 0
                  : (getTotalCartAmount() * 0.01).toLocaleString()}
              </p>
            </div>
            <hr className="my-[10px] h-[1px] border-none bg-[#e2e2e2]" />
            <div
              id="card-total-details-total"
              className={styles.cartTotalDetailsStyle}
            >
              <p>Total</p>
              <p>
                ₦{" "}
                {getTotalCartAmount() === 0
                  ? 0
                  : (getTotalCartAmount() + 200).toLocaleString()}
              </p>
            </div>
          </div>
          <button
            onClick={() => navigate("/order")}
            className="bg-primary text-white phone:w-[100%] w-[max(15vw,250px)] py-[12px] px-[10px] rounded-[4px] cursor-pointer"
          >
            PROCEED TO CHECKOUT
          </button>
        </div>
        <div id="cart-promo-code" className="flex-1 for-tab-s:justify-start">
          <div>
            <p className="text-[#555]">
              If you have a promo code, Enter it here
            </p>
            <div
              id="cart-promo-code-input"
              className="mt-[10px] flex justify-between items-center bg-[#eaeaea] rounded-[4px]"
            >
              <input
                type="text"
                placeholder="Promo Code"
                className="bg-transparent pl-[10px]"
              />
              <button className="w-[max(10vw,150px)]  py-[12px] px-[5px] bg-black text-white rounded-[4px]">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cart;
