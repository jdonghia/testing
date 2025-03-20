export async function generateStaticParams() {
  const res = await fetch("https://api.github.com/users/jdonghia/repos");
  const data = (await res.json()) as { name: string }[];

  return data.map((item) => ({
    name: item.name,
  }));
}

export default async function Sample({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;
  console.log("hello world from sample");

  // const formattedData = name.map((item: { name: string }) => item.name);

  return (
    <div>
      {name}
      {/* <p className="text-5xl">{formattedData.length}</p> */}
      {/**/}
      {/* {formattedData.map((item: string) => ( */}
      {/*   <p key={item} className="bg-red-200 m-5 inline-block"> */}
      {/*     {item} */}
      {/*   </p> */}
      {/* ))} */}
    </div>
  );
}
