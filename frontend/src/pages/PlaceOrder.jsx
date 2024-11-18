import { useContext } from "react";
import { StoreContext } from "../Context/StoreContext";
import styles from "../styles";

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  return (
    <form
      id="place-order"
      className="flex items-start justify-between gap-[50px] mt-[100px]"
    >
      <div
        id="place-order-left"
        className="w-[100%] max-width-[(max30%,3500px)]"
      >
        <p id="title" className="text-[30px] font-semibold mb-[50px]">
          Delivery Information
        </p>
        <div id="multi-fields" className={styles.placeOrderMultiFieldStyle}>
          <input
            type="text"
            placeholder="First Name"
            className={styles.placeOrderInputStyle}
          />
          <input
            type="text"
            placeholder="Last Name"
            className={styles.placeOrderInputStyle}
          />
        </div>
        <input
          type="email"
          placeholder="Email address"
          className={styles.placeOrderInputStyle}
        />
        <input
          type="text"
          placeholder="Street"
          className={styles.placeOrderInputStyle}
        />
        <div id="multi-fields" className={styles.placeOrderMultiFieldStyle}>
          <input
            type="text"
            placeholder="City"
            className={styles.placeOrderInputStyle}
          />
          <input
            type="text"
            placeholder="State"
            className={styles.placeOrderInputStyle}
          />
        </div>
        <div id="multi-fields" className={styles.placeOrderMultiFieldStyle}>
          <input
            type="text"
            placeholder="Zip Code"
            className={styles.placeOrderInputStyle}
          />
          <input
            type="text"
            placeholder="Country"
            className={styles.placeOrderInputStyle}
          />
        </div>
        <input
          type="text"
          placeholder="Phone Number"
          className={styles.placeOrderInputStyle}
        />
      </div>
      <div id="place-order-right" className="w-[100%] max-w-[max(40%,500px)]">
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
              id="card-total-details-delivery-fee"
              className={styles.cartTotalDetailsStyle}
            >
              <p>Delivery fee</p>
              <p>₦ {getTotalCartAmount() === 0 ? 0 : (200).toLocaleString()}</p>
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
                  : (
                      getTotalCartAmount() +
                      200 +
                      getTotalCartAmount() * 0.01
                    ).toLocaleString()}
              </p>
            </div>
          </div>
          <button className="bg-primary text-white w-[max(15vw,250px)] py-[12px] px-[10px] mt-[30px] rounded-[4px] cursor-pointer">
            PROCEED TO PAYMENT
          </button>
        </div>
      </div>
    </form>
  );
};
export default PlaceOrder;
