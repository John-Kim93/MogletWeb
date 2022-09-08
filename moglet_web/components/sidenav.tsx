import styles from "../styles/sidenav.module.css";
import { RiCoupon2Line } from "react-icons/ri";
import { MdOutlineRateReview } from "react-icons/md";
import { AiOutlineShop } from "react-icons/ai";
import { IoIosRestaurant } from "react-icons/io";
import { FaRegCalendarAlt } from "react-icons/fa";
import { BsCashCoin } from "react-icons/bs";
import Image from 'next/image';
import Link from "next/link";
import imgTitle from '../public/images/moglet_title.png';

export default function SideNav() {
  return (
    <div className={styles.bar}>
      <div className={styles.logo}>
        <Image
            src={imgTitle}
            alt="moglet title"
            width={70}
            height={40}
          />
        <h2>사장님 사이트</h2>
      </div>
      <ul>
        <li>
          <Link href="/service/coupon">
            <a>
              <RiCoupon2Line />
              <span>식권 관리</span>
            </a>
          </Link>
        </li>
        <li>
        <Link href="/service/review">
            <a>
              <MdOutlineRateReview />
              <span>리뷰 관리</span>
            </a>
          </Link>
        </li>
        <li>
        <Link href="/service/restaurantInfo">
          <a>
            <AiOutlineShop />
            <span>매장 관리</span>
          </a>
        </Link>
        </li>
        <li>
        <Link href="/service/menu">
          <a>
            <IoIosRestaurant />
            <span>메뉴 관리</span>
          </a>
        </Link>
        </li>
        <li>
        <Link href="/service/time">
          <a>
            <FaRegCalendarAlt />
            <span>영업 관리</span>
          </a>
        </Link>
        </li>
        <li>
        <Link href="/service/bills">
          <a>
            <BsCashCoin />
            <span>정산 관리</span>
          </a>
        </Link>
        </li>
      </ul>
    </div>
  )
}