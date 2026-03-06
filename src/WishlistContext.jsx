import { createContext, useState } from "react";

export const WishlistContext = createContext();

const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  const toggleWishlist = (product) => {
    const exists = wishlist.some((item) => item.id === product.id);

    if (exists) {
      setWishlist(wishlist.filter((item) => item.id !== product.id));
    } else {
      setWishlist([...wishlist, product]);
    }
  };

  const removeWishlist = (productName) => {
  setWishlist((prev) => {
    return prev.filter((item) => item.name !== productName);
  });
};

  return (
    <WishlistContext.Provider value={{ wishlist, toggleWishlist, removeWishlist}}>
      {children}
    </WishlistContext.Provider>
  );
};

export default WishlistProvider;
