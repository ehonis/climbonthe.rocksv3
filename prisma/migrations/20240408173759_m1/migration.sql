-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "admin" BOOLEAN NOT NULL,
    "role" TEXT NOT NULL,
    "image" TEXT,
    "password" TEXT NOT NULL,
    "href" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RopeRouteCompletion" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "routeId" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "flash" BOOLEAN NOT NULL,

    CONSTRAINT "RopeRouteCompletion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BoulderRouteCompletion" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "routeId" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "flash" BOOLEAN NOT NULL,

    CONSTRAINT "BoulderRouteCompletion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RopeRoute" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "grade" TEXT NOT NULL,
    "communityGrade" TEXT,
    "color" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "href" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "ascents" INTEGER NOT NULL,

    CONSTRAINT "RopeRoute_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BoulderRoute" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "grade" TEXT NOT NULL,
    "communityGrade" TEXT,
    "color" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "href" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "ascents" INTEGER NOT NULL,

    CONSTRAINT "BoulderRoute_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Comment" (
    "id" SERIAL NOT NULL,
    "comment" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "ropeRouteId" INTEGER,
    "boulderRouteId" INTEGER,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "RopeRouteCompletion" ADD CONSTRAINT "RopeRouteCompletion_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BoulderRouteCompletion" ADD CONSTRAINT "BoulderRouteCompletion_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_ropeRouteId_fkey" FOREIGN KEY ("ropeRouteId") REFERENCES "RopeRoute"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_boulderRouteId_fkey" FOREIGN KEY ("boulderRouteId") REFERENCES "BoulderRoute"("id") ON DELETE SET NULL ON UPDATE CASCADE;
