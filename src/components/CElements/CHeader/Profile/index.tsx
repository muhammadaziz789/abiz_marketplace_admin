export const ProfileUI = () => {
  return (
    <div className="flex space-x-16px">
      <div className="w-[45px] h-[45px] rounded-full border border-[var(--border)] flex items-center justify-center">
        <img src="/user.jpeg" alt="user" className="rounded-full w-full h-full" />
      </div>
      <div className="text-sm">
        <p className="font-medium">Muhammadaziz</p>
        <span>Admin</span>
      </div>
    </div>
  );
};
