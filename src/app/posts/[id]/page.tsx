interface PostProps {
  params: {
    id: string;
  };
}

export default function Post({ params }: PostProps) {
  const { id } = params;
  return <h1>Este es el post {id}</h1>;
}
