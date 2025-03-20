export async function generateStaticParams() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon");
  const data = (await res.json()).results as { name: string }[];

  return data.map((item: { name: string }) => ({
    name: item.name,
  }));
}

export default async function Sample({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;

  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`, {
    cache: "force-cache",
  });

  const data = (await res.json()).abilities as { name: string }[];

  // const formattedData = name.map((item: { name: string }) => item.name);

  return (
    <div>
      {JSON.stringify(data)}
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
