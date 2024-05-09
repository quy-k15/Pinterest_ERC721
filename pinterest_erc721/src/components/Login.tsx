import { useState, useEffect, FormEvent } from "react";
import img_Logo from "../images/img_Logo.png";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Web3Provider } from "@ethersproject/providers";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useWeb3React } from "@web3-react/core";
import { injected } from "../connectors";
import ABI from "../ABI.json";
import { ethers } from "ethers";
import { setUser } from "../store/UserSlice";
import { setContractInfo } from "../store/contractSlice";
import { useNavigate } from "react-router-dom";

interface LoginProps {
  open: boolean;
  handleOpen: () => void;
}
// interface ContractInfo {
//   address: string;
//   tokenName: string;
//   tokenSymbol: string;
// }

const Login: React.FC<LoginProps> = ({ open, handleOpen }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { activate, account } = useWeb3React();
  const [contract, setContract] = useState<ethers.Contract>();
  const address: string = "0xD86AC6bDa585ca719E1DD3DA60e8A7e70d94349e";

  const connect = async (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (window.ethereum) {
      try {
        await activate(injected);

        if (account) {
          console.log("connect successful");
          dispatch(setUser(account));
          navigate("/home");
        }
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        console.log("account", account);
        if (!address) {
          console.error("Contract address is required");
          return;
        }
        getContract(address, ABI, provider);
        console.log(contract);
        if (contract) {
          await readContract(contract);
        } else {
          console.log("contract error");
        }
      } catch (error: any) {
        // Type error as any to handle unknown properties
        console.error("Error on connecting:", error instanceof Error ? error.message : error);
      }
    } else {
      console.log("Please install MetaMask");
    }
  };

  interface AbiItem {
    constant?: boolean;
    inputs?: Array<{ name: string; type: string }>;
    name?: string;
    outputs?: Array<{ name: string; type: string }>;
    payable?: boolean;
    stateMutability?: string;
    type: string;
  }
  const getContract = async (
    address: string,
    abi: AbiItem[],
    provider: Web3Provider,
  ) => {
    const newContract = new ethers.Contract(address, abi, provider.getSigner());
    setContract(newContract);
    console.log("new contract", newContract);
  };
  const readContract = async (contract: ethers.Contract) => {
    try {
      const tokenName = await contract.name();
      const tokenSymbol = await contract.symbol();

      dispatch(setContractInfo({ address: address, tokenName, tokenSymbol }));
      console.log(
        `address: ${address}Token Name: ${tokenName}, Symbol: ${tokenSymbol}`,
      );
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error on connecting:", error.message);
        if ('reason' in error) console.error("Reversion reason:", (error as any).reason);
      } else {
        console.error("An unexpected error occurred", error);
      }
    }
    
  };
  useEffect(() => {
    if (account) {
      dispatch(setUser(account));
    }
  }, [account, dispatch]);
  return (
    <>
      {open && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white p-5 rounded-lg max-w-md w-full">
            <div className="w-full flex justify-end">
              <button
                className="text-blue-gray-900 p-1.5 hover:bg-gray-200 rounded "
                onClick={handleOpen}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div style={{ textAlign: "center" }}>
              <img
                className="w-10 mx-auto mb-2"
                src={img_Logo}
                alt="img_logo"
              ></img>
              <h2 className="text-3xl font-semibold text-blue-gray-900 ">
                Chào mừng bạn đến với
              </h2>
              <h2 className="text-3xl font-semibold text-blue-gray-900">
                Pinterest
              </h2>
              <p className="text-gray-600">Chọn ví bạn muốn kết nối</p>
            </div>

            <div className="mt-4">
              <p className="text-sm text-blue-gray-900 font-semibold uppercase tracking-wide opacity-70">
                Popular
              </p>
              <div className="mt-3 space-y-2 ">
                <button
                  onClick={connect}
                  className="flex items-center justify-center p-4 shadow-md hover:bg-gray-200 rounded-xl mx-auto px-16 my-5"
                >
                  <img
                    src="https://docs.material-tailwind.com/icons/metamask.svg"
                    alt="MetaMask"
                    className="h-6 w-6"
                  />
                  <span className="uppercase text-blue-gray-900 ml-3 font-medium">
                    Connect with MetaMask
                  </span>
                </button>
                <button className="flex items-center justify-center p-4 shadow-md  hover:bg-gray-200 rounded-xl mx-auto px-16 my-5">
                  <img
                    src="https://docs.material-tailwind.com/icons/coinbase.svg"
                    alt="Coinbase"
                    className="h-6 w-6 rounded-md"
                  />
                  <span className="uppercase text-blue-gray-900 ml-3 font-medium">
                    Connect with Coinbase
                  </span>
                </button>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm text-blue-gray-900 font-semibold tracking-wide opacity-70 text-center my-7">
                More wallet options
              </p>
              <div className="flex justify-center items-center my-5">
                <hr className="w-40 border-t border-gray-500 mx-auto"></hr>
                <p>Or</p>
                <hr className="w-40 border-t border-gray-500 mx-auto"></hr>
              </div>
              <div className="relative w-full flex items-center rounded-xl mx-auto my-5 shadow-md hover:bg-gray-200">
                <input
                  className="pl-10 pr-16 py-4 w-full rounded-xl focus:outline-none"
                  placeholder="Tiếp tục với Email"
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-blue-300 p-2 px-3 rounded-lg ">
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="text-gray-100 dark:text-gray-400 pointer-events-none"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
