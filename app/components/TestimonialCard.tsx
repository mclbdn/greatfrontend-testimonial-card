import Image from "next/image";

export const TestimonialCard = () => {
  return (
    // x0 y1 blur 3 spread 0 color 000 10%
    <div className="w-[340px] h-[233px] bg-white rounded-lg p-6 shadow mt-[200px] ml-auto mr-auto">
      {/* PHOTO, NAME and HANDLE */}
      <div className="flex mb-4">
        <Image
          alt="profile picture"
          src={"/avatars/profile-thumbnail.png"}
          width={48}
          height={48}
          className="mr-4"
        />
        <div className="">
          <p className="text-lg font-semibold text-neutral-900 max-w-[200px] overflow-hidden text-ellipsis whitespace-nowrap">
            Sarah Dole
          </p>
          <p className="text-sm text-neutral-600 max-w-[200px] overflow-hidden text-ellipsis whitespace-nowrap">
            @sarahdole
          </p>
        </div>
      </div>
      {/* BODY */}
      <div>
        <p className="text-neutral-600 clamp">
          I&apos;ve been searching for high-quality abstract images for my
          design projects, and I&apos;m thrilled to have found this platform.
          The variety and depth of creativity are astounding!
        </p>
      </div>
    </div>
  );
};
