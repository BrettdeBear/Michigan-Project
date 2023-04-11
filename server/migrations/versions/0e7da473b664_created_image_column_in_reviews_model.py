"""created image column in reviews model

Revision ID: 0e7da473b664
Revises: 4f8249e28a5d
Create Date: 2023-04-10 10:14:33.233720

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '0e7da473b664'
down_revision = '4f8249e28a5d'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('reviews', schema=None) as batch_op:
        batch_op.add_column(sa.Column('image', sa.String(), nullable=True))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('reviews', schema=None) as batch_op:
        batch_op.drop_column('image')

    # ### end Alembic commands ###
