import { Skeleton } from "@mui/material";

export default function HomePageSkelton() {
  return (
    <div className="flex flex-col bg-[#ffffff] h-dvh w-dvw p-10 gap-3">
      <div className="flex items-center justify-between">
        <Skeleton width={80} height={60} />
        <div className="flex items-center gap-4">
          <div className="flex gap-2 items-center">
            <Skeleton variant="circular" height={25} width={25} />
            <div className="flex flex-col align-center">
              <Skeleton variant="text" height={10} width={30} />
              <Skeleton variant="text" height={10} width={30} />
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <Skeleton variant="circular" height={25} width={25} />
            <div className="flex flex-col align-center">
              <Skeleton variant="text" height={10} width={30} />
              <Skeleton variant="text" height={10} width={30} />
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <Skeleton variant="circular" height={25} width={25} />
            <div className="flex flex-col align-center">
              <Skeleton variant="text" height={10} width={30} />
              <Skeleton variant="text" height={10} width={30} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Skeleton height={50} width={64} />
          <Skeleton height={50} width={64} />
          <Skeleton height={50} width={64} />
          <Skeleton height={50} width={64} />
          <Skeleton height={50} width={64} />
          <Skeleton height={50} width={64} />
        </div>
        <div className="flex items-center gap-2">
          <Skeleton variant="circular" height={50} width={50} />
          <Skeleton variant="circular" height={50} width={50} />
          <Skeleton variant="circular" height={50} width={50} />
        </div>
      </div>
      <div className="flex flex-1">
        <Skeleton
          height="100%"
          width="100%"
          style={{
            transform: "initial",
          }}
        ></Skeleton>
      </div>
    </div>
  );
}
